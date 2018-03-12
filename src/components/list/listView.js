import React from "react";
import {FlatList, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";
import {isAndroid, isFunction, isIOS} from "../../utilities/index";

/**
 *  dataSource :- array
 *  renderNoData :- function :- if dataSource is empty then shows this component
 *  touchableNativeFeedback :- Boolean :- use TouchableNativeFeedback or not in case of Android
 *  renderRow :- function(rowData, dataSource) :- render the List's single Item.
 *  rowTouch :- function(rowData, dataSource) :- call the onPress function for row.
 * */
export default function ListView(props) {
  let {
    dataSource, renderNoData,
    touchableNativeFeedback = false,
    renderRow, rowTouch, keyExtractor,
    removeClippedSubviews = true,
    ItemSeparatorComponent,
    ...otherListProps
  } = props;
  dataSource = dataSource ? dataSource : [];
  keyExtractor = isFunction(keyExtractor) ? keyExtractor : item => (item._id ? item._id : JSON.stringify(item));
  removeClippedSubviews = Boolean(removeClippedSubviews);
  ItemSeparatorComponent = ItemSeparatorComponent ? ItemSeparatorComponent : null;
  
  if (dataSource.length === 0 && isFunction(renderNoData)) {
    return renderNoData();
  }
  
  function getTouchAble() {
    if (isIOS() || (isAndroid() && !touchableNativeFeedback)) {
      return TouchableOpacity;
    } else if (touchableNativeFeedback && isAndroid()) {
      return TouchableNativeFeedback;
    } else {
      return TouchableOpacity;
    }
  }
  
  function renderItem({item}) {
    if (isFunction(renderRow)) {
      if (isFunction(rowTouch)) {
        let Touchable = getTouchAble();
        
        return (
          <Touchable
            onPress={() => {
              rowTouch(item, dataSource);
            }}
          >
            {renderRow(item, dataSource)}
          </Touchable>
        )
      } else {
        return renderRow(item, dataSource)
      }
    } else {
      return <View/>
    }
  }
  
  
  return (
    <FlatList
      keyExtractor={keyExtractor}
      removeClippedSubviews={removeClippedSubviews}
      ItemSeparatorComponent={ItemSeparatorComponent}
      data={dataSource}
      renderItem={renderItem}
      {...otherListProps}
    />
  )
}
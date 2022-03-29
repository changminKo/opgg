import React from 'react';
import {
  Build, Control, ItemImage,
  ItemList,
  ItemListItem,
  ItemWrapper,
  ListWrapper,
  OtherWrapper, Tooltip, ToolTipItemCost, ToolTipItemName, Ward,
} from '@components/DetailPage/MatchInfo/MatchDetails/Item/Item.styled';
import IconWardWin from '@components/DetailPage/MatchInfo/MatchDetails/Item/icon-ward-win.png';
import IconWardLose from '@components/DetailPage/MatchInfo/MatchDetails/Item/icon-ward-lose.png';
import IconBuildWin from '@components/DetailPage/MatchInfo/MatchDetails/Item/icon-build-win.png';
import IconBuildLose from '@components/DetailPage/MatchInfo/MatchDetails/Item/icon-build-lose.png';
import { useRecoilValue } from 'recoil';
import { IGames, IItem } from '@/models';
import { itemsDataStore } from '@/store';

const calcIsWin = (isWin: boolean) => {
  if (isWin) {
    return { bgColor: '#99b9cf' };
  }

  return { bgColor: '#cea7a7' };
};

export const Item:React.FC<{ data: IGames }> = (props) => {
  const { data } = props;
  const { isWin, items, stats: { ward } } = data;
  const copyArr = [...items].splice(0, items.length - 1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: itemData } = useRecoilValue(itemsDataStore);
  const wardData = items[items.length - 1];
  const wardNumber = wardData && wardData.imageUrl.slice(wardData.imageUrl.lastIndexOf(('/')) + 1, wardData.imageUrl.lastIndexOf(('.')));
  const wardInfo = wardNumber && itemData && itemData[wardNumber] ? itemData[wardNumber] : undefined;

  // eslint-disable-next-line react/no-unstable-nested-components
  const TooltipElem = (itemInfo: IItem) => {
    const { name, description, gold } = itemInfo;

    return (
      <Tooltip>
        <ToolTipItemName>{name}</ToolTipItemName>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <br />
        <div>
          가격:
          <ToolTipItemCost>
            {gold.total}
            {' '}
            (
            {gold.base}
            )
          </ToolTipItemCost>
        </div>
      </Tooltip>
    );
  };

  return (
    <ItemWrapper>
      <ListWrapper>
        <ItemList>
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const itemNumber = copyArr[index] && copyArr[index].imageUrl.slice(copyArr[index].imageUrl.lastIndexOf(('/')) + 1, copyArr[index].imageUrl.lastIndexOf(('.')));
            const itemInfo = itemNumber && itemData && itemData[itemNumber];

            return (
              <ItemListItem theme={calcIsWin(isWin)} key={index}>
                {copyArr[index] && <ItemImage src={copyArr[index].imageUrl} alt="" />}
                {itemInfo && TooltipElem(itemInfo)}
              </ItemListItem>
            );
          })}
        </ItemList>
        <OtherWrapper>
          <Ward theme={calcIsWin(isWin)}>
            {wardData && (<img src={wardData.imageUrl} alt="" />) }
            {wardInfo && TooltipElem(wardInfo)}
          </Ward>
          <Build>
            <button type="button">
              <img src={isWin ? IconBuildWin : IconBuildLose} alt="아이템 빌드" />
            </button>
          </Build>
        </OtherWrapper>
      </ListWrapper>
      <Control>
        <img src={isWin ? IconWardWin : IconWardLose} alt="" />
        {' '}
        제어 와드
        {' '}
        {ward.visionWardsBought}
      </Control>
    </ItemWrapper>
  );
};

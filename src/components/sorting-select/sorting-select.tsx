import React, { type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { productSortingList } from "../../const";

export function SortingSelect(): JSX.Element {
  const sorting = productSortingList[0];

  // const sorting = useSelector(getSorting);
  // const dispatch = useDispatch();
  const { t } = useTranslation();

  // const changeSortingHandler = ({ target }: ChangeEvent<HTMLSelectElement>) =>
  //   dispatch(changeSorting(target.value));

  return (
    <div className="relative top-24 flex justify-end">
      <label className="text-2xl">
        {t("main.sorting.label")}
        <select
          className="ml-5 border-none"
          // onChange={changeSortingHandler}
          value={sorting}
        >
          {productSortingList.map((value, index) => (
            <option key={index} value={value}>
              {t("main.sorting.type", { context: value })}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

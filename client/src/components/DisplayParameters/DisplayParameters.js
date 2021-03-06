import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterRecipes, sortRecipes } from '../../redux/actions.js';
import * as S from './DisplayParameters.styled.js';


export default function DisplayParameters() {

  const [selectedFilters, setSelectedFilters] = useState([])
  const { diets } = useSelector(state => state)
  const { sortCriteria } = useSelector(state => state.recipesDisplayParameters);
  const dispatch = useDispatch();

  function handleFilter(filter) {
    const index = selectedFilters.indexOf(filter);
    index !== -1
      ? setSelectedFilters(selectedFilters.filter(selectedFilter => selectedFilter !== filter))
      : setSelectedFilters([...selectedFilters, filter]);

    dispatch(filterRecipes(filter));
  }

  function handleOrder(sortCriteria) {
    dispatch(sortRecipes(sortCriteria));
  }

 
  return (
    <S.DisplayParameters>
      <S.OrderBy>
        <S.DropdownButton>Order by</S.DropdownButton>
        <S.DropdownContent>
          <S.DropdownContentSortCriteria active={ sortCriteria === 'az'} onClick={() => handleOrder('az') }>(a-z)</S.DropdownContentSortCriteria>
          <S.DropdownContentSortCriteria active={ sortCriteria === 'za'} onClick={() => handleOrder('za') }>(z-a)</S.DropdownContentSortCriteria>
          <S.DropdownContentSortCriteria active={ sortCriteria === 'score'} onClick={() => handleOrder('score') }>score</S.DropdownContentSortCriteria>
        </S.DropdownContent>
      </S.OrderBy>

      <S.Filters > 
        <S.FiltersTitle> 
          Filter by 
        </S.FiltersTitle>
        { diets.map((diet, index) => {
            const active = selectedFilters.includes(diet)
            return (
              <S.Filter 
                key={ index }
                active={ active }
                onClick={ () => handleFilter(diet, index) }>
                { diet }
              </S.Filter>
            )
          }
        ) }
      </S.Filters>
    </S.DisplayParameters> 
  )
};
      


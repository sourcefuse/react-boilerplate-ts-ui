import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment, Stack} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Input from 'Components/Input';
import {SideNavConfig} from 'Components/SideNav/sideNavConfig';
import {cloneDeep} from 'lodash';
import React, {useCallback, useEffect, useState} from 'react';

const SearchBar: React.FC<{
  componentList: SideNavConfig[];
  updateList: React.Dispatch<React.SetStateAction<SideNavConfig[]>>;
}> = ({componentList, updateList}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const initialList = cloneDeep(componentList);

  const [data] = useState<SideNavConfig[]>(initialList); // NOSONAR

  const searchFilter = useCallback(
    (query: string) => {
      const list: SideNavConfig = data.find((elem: SideNavConfig) => elem.label === 'Components')!;

      if (list?.children) {
        list.children?.forEach(component => {
          if (!component.label.toLowerCase().includes(query)) {
            component.visible = false;
          }
        });
      }

      updateList(data);
    },
    [data, updateList],
  );

  useEffect(() => {
    searchFilter(searchQuery);
  }, [searchQuery, searchFilter]);

  return (
    <Stack direction="row" sx={{px: '10px'}}>
      <Input
        id="search-bar"
        className="text"
        onChange={value => {
          setSearchQuery(value);
        }}
        placeholder="Search Components"
        size="small"
        endAdornment={
          <InputAdornment position="end">
            <IconButton type="submit" aria-label="search">
              <SearchIcon style={{fill: '#D1D1D1'}} />
            </IconButton>
          </InputAdornment>
        }
      />
    </Stack>
  );
};

export default SearchBar;

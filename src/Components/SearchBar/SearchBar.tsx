import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment, Stack} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Input from 'Components/Input';
import {SideNavConfig, SideNavLinkTitle} from 'Components/SideNav/sideNavConfig';
import {cloneDeep} from 'lodash';
import React, {useEffect, useState} from 'react';

const SearchBar: React.FC<{
  componentList: SideNavConfig[];
  updateList: React.Dispatch<React.SetStateAction<SideNavConfig[]>>;
}> = ({componentList, updateList}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const initialList = cloneDeep(componentList as SideNavLinkTitle[]);

  const [data, setData] = useState<SideNavLinkTitle[]>(initialList);

  const searchFilter = (query: string) => {
    setData(initialList);

    const list: SideNavLinkTitle = data.find(
      (elem: SideNavLinkTitle) => elem.label === 'Components',
    ) as SideNavLinkTitle;

    list.children?.forEach((component) => {
      if (!component.label.toLowerCase().includes(query)) {
        component.visible = false;
      }
    });

    updateList(data);
  };

  useEffect(() => {
    searchFilter(searchQuery);
  }, [searchQuery]);

  return (
    <Stack direction="row" sx={{px: '10px'}}>
      <Input
        id="search-bar"
        className="text"
        onChange={(value) => {
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

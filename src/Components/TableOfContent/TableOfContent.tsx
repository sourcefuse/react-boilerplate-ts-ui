import {Box, List, ListItemButton, ListItemText, Stack} from '@mui/material';
import {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {Link} from 'react-router-dom';
import {TimelineDot} from '@mui/lab';

interface Heading {
  id: string;
  title: string;
}

const useObserver = (setActiveId: React.Dispatch<React.SetStateAction<string>>) => {
  const headingElementsRef = useRef({});

  useEffect(() => {
    const handleElementInView = (headings: IntersectionObserverEntry[]) => {
      headingElementsRef.current = headings.reduce(
        (map: {[props: string]: IntersectionObserverEntry}, headingElement) => {
          map[headingElement.target.id] = headingElement;
          return map;
        },
        headingElementsRef.current,
      );

      const headingsInView: IntersectionObserverEntry[] = [];
      for (const [, value] of Object.entries(headingElementsRef.current)) {
        if ((value as IntersectionObserverEntry).isIntersecting)
          headingsInView.push(value as IntersectionObserverEntry);
      }

      setActiveId(headingsInView[0].target.id);
    };

    const observer = new IntersectionObserver(handleElementInView, {
      rootMargin: '-100px 0px -40% 0px',
    });

    const headingElements = Array.from(document.getElementsByClassName('headings'));
    headingElements.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [setActiveId]);
};

const useTitles = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const headingElements = Array.from(document.getElementsByClassName('headings'));
    const headings: Heading[] = [];

    headingElements.forEach((elem) => {
      headings.push({
        id: elem.id,
        title: elem.innerHTML,
      });
    });

    setHeadings(headings);
  }, []);

  return {headings};
};

const HeadingItem: React.FC<{title: string; id: string; activeId: string}> = ({title, id, activeId}) => {
  return (
    <Stack direction="row" sx={id === activeId ? {alignItems: 'baseline', margin: '-6px'} : {alignItems: 'baseline'}}>
      {id === activeId && (
        <TimelineDot
          sx={{
            backgroundColor: '#19A5FF',
          }}
        />
      )}
      <ListItemButton
        component={Link}
        to={`#${id}`}
        onClick={() => {
          const ref = document.getElementById(id)!;
          setTimeout(function () {
            ref.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }, 100);
        }}
        sx={id === activeId ? styles.activeLink : styles.link}
      >
        <ListItemText primary={title} />
      </ListItemButton>
    </Stack>
  );
};

const TableOfContent = () => {
  const {headings} = useTitles();
  const [activeId, setActiveId] = useState('');

  useObserver(setActiveId);

  return (
    <Box sx={styles.container}>
      {headings.map((heading) => (
        <List key={heading.id}>
          <HeadingItem id={heading.id} title={heading.title} activeId={activeId} />
        </List>
      ))}
    </Box>
  );
};

export default TableOfContent;

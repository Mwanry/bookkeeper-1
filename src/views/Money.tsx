import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './money/CategorySection';
import {NumberPad} from './money/NumberPad';
import {NoteSection} from './money/NoteSection';
import {TagsSection} from './money/TagsSection';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'


function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0
  });

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };


  return (
    <MyLayout>
      {selected.tags.join(',')}
      <TagsSection value={selected.tags}
                   onChange={(tags) => onChange({tags})}/>
      <NoteSection value={selected.note}
                   onChange={(note) => onChange({note})}/>
      <CategorySection value={selected.category}
                       onChange={(category) => onChange({category})}/>
      <NumberPad value={selected.amount}
                 onChange={(amount) => onChange({amount})}
                 onConfirm={() => {}}/>
    </MyLayout>
  );
}

export {Money};
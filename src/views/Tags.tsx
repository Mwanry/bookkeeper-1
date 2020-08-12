import {Layout} from 'components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';
import {Button} from 'components/Button';
import {Center} from 'components/Center';
import {Space} from 'components/space';

const TagList = styled.ol`
  background: white;
  font-size: 16px;
  > li{
    border-bottom: 1px solid #d5d5d5;
    margin: 0 16px; 
    > a{
      padding: 12px 0 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;


function Tags() {
  const {tags} = useTags();

  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className='oneLine'>{tag.name}</span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export {Tags};
import React from 'react';
import Collapse from 'rc-collapse';

// Styles
import { DivItem } from './styles';
import 'rc-collapse/assets/index.css';

export function Item({ data }) {
  const Panel = Collapse.Panel;

  return (
    <DivItem>
      <Collapse>
        <Panel header={data.name}>
          <ul>
            {data.products.map((product) => (
              <li key={product.id}>
                <p className='product-name'>{product.name}</p>
                <p className='category-name'>{product.category.name}</p>
              </li>
            ))}
          </ul>
        </Panel>
      </Collapse>
    </DivItem>
  );
}

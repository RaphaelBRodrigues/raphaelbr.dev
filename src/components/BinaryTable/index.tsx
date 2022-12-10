import React, {
  useEffect, useState,
} from 'react';
import * as S from './styled';

type Item = {
  number: Number;
  highlighted: Boolean;
};

const INITIAL_TABLE = new Array(32).fill({
  number: 0,
  highlighted: false,
});

const BinaryTable: React.FC = () => {
  const [matrix, setMatrix] = useState<Item[]>(INITIAL_TABLE);

  useEffect(() => {
    const updateTable = setInterval(() => {
      setMatrix((state) => state.map(() => ({
        highlighted: !!Math.round(Math.random() - 0.1),
        number: Math.round(Math.random()),
      })));
    }, 300);

    return () => {
      clearInterval(updateTable);
    };
  }, []);

  return (
    <S.BinaryWrapper>
      <S.Table>
        {matrix.map(({
          number, highlighted,
        }, index) => (
          <S.Item highlighted={highlighted} key={index}>
            {number}
          </S.Item>
        ))}
      </S.Table>
    </S.BinaryWrapper>
  );
};

export default BinaryTable;

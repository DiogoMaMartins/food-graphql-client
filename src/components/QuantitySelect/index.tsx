import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  height: 32px;
  width: 64px;
`;

const quantityOptions = (new Array(10).fill(0)).map((v, i) => i);

interface QuantitySelectProps {
  id: number;
  onChange: Function;
}

const QuantitySelect = React.memo(({ id, onChange }: QuantitySelectProps) => {
  console.log("quantitySelect")
  const onChangeQuantity = React.useCallback((e) => {
    console.log("on change",e.target.value)
    onChange(id, e.target.value);
  }, []);

  return (
    <Select onChange={onChangeQuantity}>
      {quantityOptions.map(v => (
        <option key={v} value={v}>{v}</option>
      ))}
    </Select>
  );
});

export default QuantitySelect;

import styled from 'styled-components';

interface SelectedOptionProps {
  title: string;
  onSelect: () => void;
  isSelected: boolean;
}

const Button = styled.button<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.5em;
  padding: 1em;
  border: none;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? '#F46811' : 'rgb(223, 222, 222)'};
  color: ${(props) => (props.isSelected ? 'white' : 'initial')};

  &:hover {
    background-color: #ff7f50;
    color: white;
  }
`;

const SelectedOption: React.FC<SelectedOptionProps> = ({
  title,
  onSelect,
  isSelected,
}) => {
  return (
    <Button onClick={onSelect} isSelected={isSelected}>
      {title}
    </Button>
  );
};

export default SelectedOption;

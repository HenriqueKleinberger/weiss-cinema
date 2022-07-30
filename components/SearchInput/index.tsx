import { Search, Input } from './styles';
import SearchImg from '../../public/search.svg';

interface IProps {
  setValue: (value: string) => void;
  value: string;
}

const SearchInput = ({ setValue, value }: IProps) => {
  return (
    <Search>
      <SearchImg width={15} height={15} />
      <Input
        type="text"
        placeholder="Search your favorite movie"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </Search>
  );
};

export default SearchInput;

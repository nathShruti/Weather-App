import { SearchContextProvider } from "./context";
import Example from "./Header";
import SearchBar from "./Search";
import { DefaultTable } from "./Table";

export default function Homepage() {
  return (
    <SearchContextProvider>
      <div className="App home font-kanit-regular">
        <Example></Example>
        <SearchBar></SearchBar>
        <DefaultTable></DefaultTable>
      </div>
    </SearchContextProvider>
  );
}
import React from 'react';
import Logo from './components/logo/logo';
import Profile from './components/profile/profile';
import SearchBox from './components/searchBox/searchBox';
import ListWrapper from './components/listWrapper/listWrapper';
import GameList from './components/gameList/gameList';
import CategoriesList from './components/categoriesList/categoriesList';
import LoginForm from './components/loginForm/loginFormContainer';

export default class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      currentCategory: undefined,
      searchStr: undefined,
      showLoginForm: false
    }
    
    this.onSearch = this.onSearch.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.showLoginForm = this.showLoginForm.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  showLoginForm() {
    this.setState({
      showLoginForm: true
    })
  }
  
  onSearch(searchStr) {
    this.setState({
      searchStr: searchStr
    });
  }

  onCategoryChange(category) {
    this.setState({
      currentCategory: category
    })
  }

  logOut() {
    this.props.logout(this.props.userInfo);
  }

  filterGames(games, category, searchStr) {
    if (!category && !searchStr) {
      return games;
    }

    return games.filter(v => {
      if (searchStr) {
        return v.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1;
      }

      return v.categoryIds.indexOf(category.id) !== -1;
    });
  }

  componentWillReceiveProps(props) {
    if (props.userInfo) {
      this.setState({showLoginForm: false});
    }
  }

  render() {
    return (
      <div>
        <Logo></Logo>
        <div className='container'>
          <div>
            <Profile 
              className='pull-left' 
              player={this.props.userInfo}
              onLogin={this.showLoginForm}
              onLogout={this.logOut}
            ></Profile>
            <SearchBox className='pull-right margin-top-10' onSearch={this.onSearch}></SearchBox>
            <div className='clear'></div>
            <div>
              <div style={{width:'80%'}} className='pull-left'>
                <ListWrapper title='Games'>
                  <GameList items={
                    this.filterGames(
                      this.props.games, 
                      this.state.currentCategory,
                      this.state.searchStr
                    )}>
                  </GameList>
                </ListWrapper>
              </div>
              <div style={{width: '20%'}} className='pull-left'>
                <ListWrapper title='Categories'>
                  <CategoriesList items={this.props.categories} categoryChange={this.onCategoryChange}></CategoriesList>
                </ListWrapper>
              </div>
              <div className='clear'></div>
            </div>
          </div>
        </div>
        {
          this.state.showLoginForm && !this.props.userInfo?
            <LoginForm onCancel={() => {
              this.setState({showLoginForm : false});
            }}></LoginForm> : ''
        }           
      </div>
    );
  }
}

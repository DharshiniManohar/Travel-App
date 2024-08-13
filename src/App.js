import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ImageSlideshow from './components/ImageSlideshow';
import ImageGrid from './components/ImageGrid';
import Prize from './components/Prize';
import Review from './components/Review';
import GroupTour from './components/GroupTour';
import Accre from './components/Accre';
import Subscribe from './components/Subscribe';
import Login from './components/Login';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import Company from './components/Company';
import Kerala from './components/Kerala';
import Packages from './components/Packages';
import Goa from './components/Goa'; 
import Shimla from './components/Shimla'; 
import Darjeeling from './components/Darjeeling'; 
import Manali from './components/Manali';
import Maldives from './components/Maldives'; 
import Bali from './components/Bali'; 
import Greece from './components/Greece'; 
import Dubai from './components/Dubai';
import Paris from './components/Paris';
import ContactPage from './components/ContactPage';
import UltimateGroupGuide from './components/UltimateGroupGuide';
import TourDetails1 from './components/tourDetails1';
import TourDetails2 from './components/tourDetails2';
 import TourDetails3 from './components/tourDetails3';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.getPageFromURL(),
    };
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  getPageFromURL() {
    return window.location.pathname.replace('/', '') || 'home';
  }

  handleNavigation(page) {
    if (page === 'chatbot') {
      window.location.href = '/chatbot.html'; // Redirect to the chatbot HTML page
    } else {
      this.setState({ currentPage: page });
      window.history.pushState(null, "", `/${page}`);
    }
  }

  render() {
    let content;
    switch (this.state.currentPage) {
      case 'login':
        content = <Login />;
        break;
      case 'packages':
        content = <Packages />;
        break;
      case 'ultimategroupguide':
        content = <UltimateGroupGuide />;
        break;
      case 'contact':
        content = <ContactPage />;
        break;
      case 'company':
        content = <Company />;
        break;
      case 'kerala':
        content = <Kerala />;
        break;
      case 'goa':
        content = <Goa />;
        break;
      case 'shimla':
        content = <Shimla />;
        break;
      case 'manali':
        content = <Manali />;
        break;
      case 'darjeeling':
        content = <Darjeeling />;
        break;
      case 'maldives':
        content = <Maldives />;
        break;
      case 'bali':
        content = <Bali />;
        break;
      case 'greece':
        content = <Greece />;
        break;
      case 'dubai':
        content = <Dubai />;
        break;
      case 'paris':
        content = <Paris />;
        break;
      case 'tourDetails1':
        content = <TourDetails1 />;
        break;
      case 'tourDetails2':
        content = <TourDetails2 />;
        break;
      case 'tourDetails3':
        content = <TourDetails3 />;
        break;
      case 'home':
      default:
        content = (
          <>
            <ImageSlideshow />
            <ImageGrid />
            <Prize />
            <GroupTour />
            <Review />
            <Accre />
            <Subscribe />
          </>
        );
    }

    return (
      <div>
        <Navbar onNavigate={this.handleNavigation} />
        {content}
        <Footer />
        <Copyright />
      </div>
    );
  }
}

export default App;


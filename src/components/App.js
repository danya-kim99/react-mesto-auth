import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import { api } from "../utils/Api";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import AddPlacePopup from "./AddPlacePopup";
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Register from "./Register";
import AuthorizationPopup from "./AuthorizationPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAuthorizationPopupOpen, setAuthorizationPopupOpen] =
    React.useState(false);  
  const [currentUser, setCurrentUser] = React.useState(null);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [email, setEmail] = React.useState(null);

  React.useEffect(() => {
    api
      .getProfileInfo()
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setAuthorizationPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleCardDelete(card) {
    console.log(card)
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => {
          if (c._id !== card._id) {
            return c
          }
        }))
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleUpdateUser(formData) {
    api
      .patchProfileInfo(formData)
      .then((newCurrenUser) => {
        setCurrentUser(newCurrenUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleUpdateAvatar(link) {
    api
      .patchProfileAvatar(link)
      .then((newCurrenUser) => {
        setCurrentUser(newCurrenUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleAddCard(card) {
    api
      .postCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }

 function handleAuthorization(status) {}

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<ProtectedRoute
            element={Main}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            cards={cards}
            onCardClick={setSelectedCard}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            email={email}
          />} />
          <Route path="/sign-in" element={<Login />}></Route>
          <Route path="/sign-up" element={<Register openAuthorizationPopup={handleAuthorization} />}></Route>
        </Routes>

        <Footer />
        <ImagePopup card={selectedCard} isOpen={selectedCard} onClose={closeAllPopups} />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddCard={handleAddCard}
        />
        <AuthorizationPopup
          isOpen={isAuthorizationPopupOpen}
          onClose={closeAllPopups}
          onAuthorization={handleAuthorization}
        />

      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;

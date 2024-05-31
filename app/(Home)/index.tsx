import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Container,
  Fab,
  Typography
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import { ReduxState, User, UsersState } from "../../Types";
import "./index.css";
import { InputText, ModalPopUp } from "../../Components";
import { addUser, deleteUser, updateUser } from "../../Redux/actions/users.action";

const initialUser: User = {
  id: "",
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: ""
    }
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: ""
  }
};

const Home = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const usersState: UsersState = useSelector((state: ReduxState) => state.users);
  const { data, loading, error } = usersState;
  const [selectedUser, setSelectedUser] = useState<User>(initialUser);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  const _renderLoading = (): React.JSX.Element => {
    return (
      <Box className="loading-container">
        <CircularProgress size={50} thickness={4} />
      </Box>
    );
  };

  const _onClickDetails =
    (user: User): VoidFunction =>
    (): void => {
      setSelectedUser(user);
      setShowDetails(true);
    };

  const _onClickDelete =
    (user: User): VoidFunction =>
    (): void => {
      setSelectedUser(user);
      setShowConfirmation(true);
    };

  const _renderCardUser = (user: User): React.JSX.Element => (
    <Card key={user.id} sx={{ width: "300px" }} className="card-container">
      <CardContent>
        <div className="avatar-container">
          <Avatar
            alt={user.name}
            src={"https://picsum.photos/50?random=" + user.id}
            className="avatar"
          />
          <Typography variant="h6">{user.name}</Typography>
        </div>
        <hr />
        <div className="item-container">
          <MailIcon color="primary" />
          <Typography variant="body1">{user.email}</Typography>
        </div>
        <div className="item-container">
          <PhoneIcon color="primary" />
          <Typography variant="body2">{user.phone}</Typography>
        </div>
      </CardContent>
      <CardActions className="actions-container">
        <DeleteIcon fontSize="small" color="error" onClick={_onClickDelete(user)} />
        <Button variant="contained" size="small" onClick={_onClickDetails(user)}>
          Details
        </Button>
      </CardActions>
    </Card>
  );

  const _renderCardList = (users: User[]): React.JSX.Element => (
    <Box className="content-container">{users.map(_renderCardUser)}</Box>
  );

  const _onEditClicked = (): void => {
    setIsEdited(true);
  };

  const _onSaveClicked = (users: User[]): void => {
    if (selectedUser.id === "") {
      const newSelectedUser = { ...selectedUser };
      const newId = users.length + 1;
      Object.defineProperty(newSelectedUser, "id", { value: String(newId) });

      setShowDetails(false);
      setSelectedUser(initialUser);
      dispatch(addUser(selectedUser));
    } else {
      setShowDetails(false);
      setSelectedUser(initialUser);
      dispatch(updateUser(selectedUser));
    }
  };

  const _onActionClick =
    (users: User[]): VoidFunction =>
    (): void => {
      isEdited ? _onSaveClicked(users) : _onEditClicked();
    };

  const _onCloseDetails = (): void => {
    setIsEdited(false);
    setShowDetails(false);
    setSelectedUser(initialUser);
  };

  const _onChangeField =
    (target: string) =>
    (event: any): void => {
      const newSelectedUser = { ...selectedUser };
      Object.defineProperty(newSelectedUser, target, { value: event.target.value });
      setSelectedUser(newSelectedUser);
    };

  const _renderModalDetails = (users: User[], selectedUser?: User): React.JSX.Element => {
    return (
      <ModalPopUp
        open={showDetails}
        onClose={_onCloseDetails}
        titleText="User details"
        actionText={isEdited ? "Save" : "Edit"}
        onAction={_onActionClick(users)}
      >
        <Box component="form" noValidate className="form-content">
          <InputText
            id="name"
            defaultValue={selectedUser?.name!}
            isEdited={isEdited}
            label="Name"
            onChange={_onChangeField("name")}
            required
          />
          <InputText
            id="email"
            defaultValue={selectedUser?.email!}
            isEdited={isEdited}
            label="Email"
            onChange={_onChangeField("email")}
            required
          />
          <InputText
            id="phone"
            defaultValue={selectedUser?.phone!}
            isEdited={isEdited}
            label="Phone number"
            onChange={_onChangeField("phone")}
            required
          />
        </Box>
      </ModalPopUp>
    );
  };

  const _onClickAdd = (): void => {
    setIsEdited(true);
    setShowDetails(true);
  };

  const _renderAddButton = (): React.JSX.Element => (
    <Box className="fab-container">
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={_onClickAdd} />
      </Fab>
    </Box>
  );

  const _onCloseConfirmation = (): void => {
    setShowConfirmation(false);
    setSelectedUser(initialUser);
  };

  const _onConfirmDelete = (): void => {
    setShowConfirmation(false);
    setSelectedUser(initialUser);
    dispatch(deleteUser(selectedUser.id));
  };

  const _renderConfirmationDetails = (): React.JSX.Element => (
    <ModalPopUp
      open={showConfirmation}
      onClose={_onCloseConfirmation}
      titleText="Confirmation delete"
      actionText="Delete"
      onAction={_onConfirmDelete}
    >
      <Box className="delete-content">
        <Typography variant="body2">Are you sure want to delete this user?</Typography>
      </Box>
    </ModalPopUp>
  );

  const _renderContent = (users: User[]): React.JSX.Element => (
    <Container className="container">
      {_renderCardList(users)}
      {_renderAddButton()}
      {_renderModalDetails(users, selectedUser)}
      {_renderConfirmationDetails()}
    </Container>
  );

  return loading ? _renderLoading() : _renderContent(data);
};

export default Home;

import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { setUserAction } from "../../actions";

const mapStateToProps = (state) => ({
  email: state.user.email,
  favourite: state.user.favourite,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (email) => dispatch(setUserAction(email)),
});

const Profile = (props) => {
  const [email, setEmail] = useState("");
  return (
    <>
      {props.email ? (
        <Container>
          <div className="profile-top-container">
            <h1>Your Favourites</h1>
            <p>{props.email}</p>
            <Row>
              {props.favourite?.map((j) => (
                <Col md={4}>
                  <h3>{j.title}</h3>
                  <p>{j.company}</p>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      ) : (
        <Container>
          <div className="login-cont">
            <h1>Write your email here</h1>
            <Form.Control
              type="text"
              placeholder="example@example.com"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <Button onClick={() => props.setUser(email)}>Submit</Button>
          </div>
        </Container>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

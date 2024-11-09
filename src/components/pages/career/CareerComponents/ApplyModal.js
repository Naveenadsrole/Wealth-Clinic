import React from 'react';
import { Modal, Container} from 'react-bootstrap';
import Heading from '../../../globalComponents/molecules/Heading';
import SelectOption from '../../../globalComponents/molecules/SelectOption';
import ButtonDarkBlue from '../../../globalComponents/molecules/ButtonDarkBlue';
import InputCustom from '../../../globalComponents/molecules/InputCustom';

const ApplyModal = ({ show, handleClose, position }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {/* <Form>
            <Row>
              <Col xs={12}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group controlId="formResume">
                  <Form.Label>Resume</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="text-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form> */}
          <CareersForm/>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ApplyModal;


const OptionArray = ["Noida", "Delhi", "Gurgaon", "Bangalore"];
const COUNTRY_CODE = ["+01", "+41", "+61"];

const CareersForm = ({ className }) => {
  return (
    <div className="cityPageForm col-md-12 px-4 ">
      <div className="d-flex my-4 ">
        <div>
          
        </div>

        <Heading
          text={"Contact our Real Estate Experts"}
          fontSize={"1.rem"}
          color="111"
          fontWeight="600"
          style={{ lineHeight: "1.5rem" }}
        />
      </div>

      <form
        onClick={(e) => e.preventDefault()}
        className={`border rounded-3  ${className}`}
      >
        <InputCustom placeholder="Enter Name" className="px-3 rounded-2" />
        <InputCustom placeholder="Enter Email" className="px-3 rounded-2" />

        <div className="col-lg-12 d-flex justify-content-between">
          <SelectOption
            data={COUNTRY_CODE}
            className={"px-2  rounded-2 w-100"}
            selectText="+91"
          />
          <div className="col-md-9">
            <InputCustom
              placeholder="Phone Number"
              className="px-3 pr-4 rounded-2  w-100"
            />
          </div>
        </div>
        <SelectOption
          data={OptionArray}
          className={"rounded-2"}
          selectText="Select"
        />
        <ButtonDarkBlue name="Contact Now" className={"px-3 rounded-2"} />
        
      </form>
    

      {/* <div>Enable update through WhatsApp</div> */}

      {/* </div> */}
    </div>
  );
};
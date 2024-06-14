import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Modal, InputNumber, Row, Col, Select } from "antd";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const { Option } = Select;

const Hero = () => {
  const formRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [formValues, setFormValues] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    selectedItems: "",
    query: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    const form = formRef.current;
    console.log(formValues);
    emailjs
      .send("service_5hsijy9", "template_uyv04zn", formValues, "_277DntGEBN13mq7H")
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setVisible(false);
          form.reset();
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSelectChange = (selectedItems) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      selectedItems,
    }));
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setFormValues({
      name: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      selectedItems: [],
      query: "",
    });
  };

  const validatePhoneNumber = (phoneNumber) => {
    return phoneNumber && phoneNumber.length === 10;
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="mb-6 h1">
            Explore the Possibilities of&nbsp;Digital&nbsp;World with{" "}
            <span className="relative inline-block">
              Chill Tech{" "}
              <img
                src={curve}
                className="absolute left-0 w-full top-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="max-w-3xl mx-auto mb-6 body-1 text-n-2 lg:mb-8">
            Elevate your digital strategy with Chill Tech. Transform your marketing with cutting-edge AI solutions.
          </p>
          <Button onClick={showModal}>Get Your Free Quote</Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img src={robot} width={1024} height={490} alt="AI" />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Followed You"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="relative z-10 hidden mt-20 lg:block" />
      </div>
      <BottomLine />
      <Modal
        title="Get a Free Quote"
        visible={visible}
        onOk={sendEmail}
        onCancel={handleCancel}
        className="modal-transparent"
      >
        <form ref={formRef} onSubmit={sendEmail} layout="vertical">
          <Row gutter={16}>
            <Col span={24}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formValues.companyName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </Col>
            <Col span={12}>
              <label>Phone Number</label>
              <InputNumber
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={(value) => setFormValues((prevValues) => ({
                  ...prevValues,
                  phoneNumber: value,
                }))}
                required
                className="w-full"
                min={0}
                style={{ width: '100%' }}
              />
              {!validatePhoneNumber(formValues.phoneNumber) && (
                <span className="text-red-500">Please enter 10 digits</span>
              )}
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <label>Select Our Services</label>
              <Select
                name="selectedItems"
                mode="multiple"
                placeholder="Select Service"
                value={formValues.selectedItems}
                onChange={handleSelectChange}
                className="w-full"
              >
                <Option value="Digital Marketing">Digital Marketing</Option>
                <Option value="Social Media Management">Social Media Management</Option>
              </Select>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <label>Tell us about your business</label>
              <textarea
                name="query"
                value={formValues.query}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full p-2 border rounded"
              />
            </Col>
          </Row>
          <div className="flex justify-end">
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </Section>
  );
};

export default Hero;

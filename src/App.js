import "./App.css";
import { Form, Input, Button, Card, Row, Col } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const App = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Row>
      <Card title="Email" style={{ width: 500 }}>
        <Form layout="vertical" name="nest-messages" onFinish={onFinish}>
          <Form.Item
            name="sender"
            label="Your name"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="senderEmail"
            label="Your email"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="subject"
            label="Subject"
          >
            <Input />
          </Form.Item>
          <Form.Item name="message" label="Message">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Send email
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};

export default App;

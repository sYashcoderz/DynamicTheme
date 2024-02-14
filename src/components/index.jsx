import { Button, Checkbox, Col, 
    ColorPicker, DatePicker, Divider,
    Form, Input, InputNumber, Mentions,
    Pagination, Radio, Row, Select, 
    Slider, Space, Spin, Switch
} from 'antd';

const DynamicTheme = (props) => {
    const { Option } = Select;
    const { customTheme, setCustomTheme } = props;

    const SplitSpace = (props) => <Space split={<Divider type="vertical" />} size={4} {...props} />;

    const colors = ['#DCB013', '#A91E1E', '#4E39B7', '#04AF15'];

    const HandleCustomTheme = (key, val) => {
        setCustomTheme(prevColors => ({
            ...prevColors,
            [key]: val
        }));
    };
    
    const handleReset = () => {
        setCustomTheme({
            primary: '#00b96b',
            bgContainer:'#f6ffed',
            fontFamily:'sans-serif'
        })
    };
    
    const circleStyle = {
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        cursor: 'pointer',
        border: '2px solid transparent',
    };

    const selectProps = {
    style:{ width : 128 },
    options: [
        {
        value: 'light',
        label: 'Light',
        },
        {
        value: 'bamboo',
        label: 'Bamboo',
        },
        {
        value: 'little',
        label: 'Little',
        },
    ],
    };

return (
    <>
        <Row style={{ backgroundColor: customTheme?.onDarkMode ? '#000' : '#ffff', color: customTheme?.onDarkMode ? '#ffff' : '#000' }} >
            <Col style={{padding:'15px' }} xl={24} lg={24} >
                <Row><h4>Mind Inventory Demo </h4></Row>

                <Row style={{ border:'1px solid #72959A', borderRadius:'10px', height:'100%' }}>
                    <Col xl={10} style={{ padding:'15px' }}>
                        <Row style={{ display:'flex', flexDirection:'column' }} gutter={[0, 10]}>
                            <Col span={24}>
                                <Row> <h4 style={{ color:'#72959A' }}>Theme colors</h4> </Row>
                                <Row gutter={[16, 16]}>
                                    {colors.map((color, index) => (
                                        <Col key={index}>
                                            <div
                                            style={{
                                                ...circleStyle,
                                                backgroundColor: color,
                                                borderColor: customTheme === color ? '#ED510C' : 'transparent',
                                                paddingBottom: customTheme === color ? '5px' : 0,
                                            }}
                                            onClick={() => HandleCustomTheme("primary", color)}
                                            ></div>
                                        </Col>
                                    ))}
                                </Row>
                                <Divider type='vertical' />

                                <Row>
                                    <span style={{ margin:"5px 8px 0 0" }}>Add Custom Primary Color : </span>
                                    <ColorPicker
                                        showText
                                        value={customTheme.primary}
                                        onChangeComplete={(color) => HandleCustomTheme("primary", color.toHexString())}
                                    />
                                </Row>
                                <Divider />

                                <Row>
                                    <span style={{ margin:"5px 8px 0 0" }}>Add custom secondry Color : </span>
                                    <ColorPicker
                                        showText
                                        value={customTheme.bgContainer}
                                        onChangeComplete={(color) => HandleCustomTheme("bgContainer", color.toHexString())}
                                    />
                                </Row>
                                <Divider />

                                <Row>
                                    <span style={{ marginRight:"8px" }}>Change Font : </span>
                                    <Select value={customTheme?.fontFamily} style={{ width: 120 }} onChange={(value) => HandleCustomTheme("fontFamily", value)}>
                                        <Option value="Arial">Arial</Option>
                                        <Option value="Helvetica">Helvetica</Option>
                                        <Option value="Verdana">Verdana</Option>
                                    </Select>
                                </Row>
                                <Divider />

                                <Row>
                                    <span style={{ marginRight:"8px" }}>Enable Dark Mode : </span>
                                    <Switch checked={customTheme?.onDarkMode} onChange={(val) => HandleCustomTheme("onDarkMode", val)} />
                                    <Divider />
                                    <Button onClick={handleReset}>Reset</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col xl={14} style={{ padding:'10px' }}>
                        <Row>
                            <Col span={24}> <h4 style={{ color:'#72959A' }}>Preview</h4> </Col>
                            <Col xl={24}>
                                <SplitSpace>
                                    <Button type="primary">
                                    Primary
                                    </Button>
                                    <Button>Default</Button>
                                    <Button type="dashed">
                                    Dashed
                                    </Button>
                                    <Button type="text">
                                    Text
                                    </Button>
                                    <Button type="link">
                                    Link
                                    </Button>
                                </SplitSpace>
                            </Col>
                            <Divider />

                            <Col xl={24}>
                                <SplitSpace>
                                <Form>
                                    <SplitSpace>
                                        <Form.Item>
                                            <Input placeholder='Enter Input' />
                                        </Form.Item>
                                        
                                        <Form.Item>
                                            <InputNumber placeholder='number' />
                                        </Form.Item>

                                        <Form.Item>
                                            <Select placeholder='select' {...selectProps} />
                                        </Form.Item>
                                        
                                        <Form.Item hasFeedback validateStatus="validating">
                                            <Input placeholder='Enter Input' />
                                        </Form.Item>
                                    </SplitSpace>
                                </Form>
                                </SplitSpace>
                            </Col>
                            <Divider />

                            <Col xl={24}>
                                <SplitSpace>
                                    <Checkbox>Checkbox</Checkbox>

                                    <Radio.Group defaultValue="bamboo">
                                    <Radio value="bamboo">Bamboo</Radio>
                                    <Radio value="light">Light</Radio>
                                    <Radio value="little">Little</Radio>
                                    </Radio.Group>

                                    <Mentions placeholder="Mention by @">
                                    <Mentions.Option value="afc163">Testing</Mentions.Option>
                                    <Mentions.Option value="zombieJ">zombieJ</Mentions.Option>
                                    <Mentions.Option value="yesmeck">yesmeck</Mentions.Option>
                                    </Mentions>

                                    <Slider
                                    defaultValue={30}
                                    style={{
                                        width: 100,
                                    }}
                                    />

                                    <Switch defaultChecked />
                                </SplitSpace>
                            </Col>
                            <Divider />

                            <Col xl={24}>
                                <SplitSpace>
                                    <Pagination showQuickJumper defaultCurrent={2} total={50} />
                                    <DatePicker />
                                    <Spin />
                                </SplitSpace>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </>

)
}

export default DynamicTheme
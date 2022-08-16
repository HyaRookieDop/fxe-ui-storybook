import './index.scss';

import {h} from "vue"
import { Col, Row } from 'fxe-semi-ui';


export default {
    title: "Grid"
}

export const GridDefault = () => (
    <div class="grid">
        <Row>
            <Col span={24}>
                <div class="col-content">col-24</div>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col span={12}>
                <div class="col-content">col-12</div>
            </Col>
            <Col span={12}>
                <div class="col-content">col-12</div>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col span={8}>
                <div class="col-content">col-8</div>
            </Col>
            <Col span={8}>
                <div class="col-content">col-8</div>
            </Col>
            <Col span={8}>
                <div class="col-content">col-8</div>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col span={6}>
                <div class="col-content">col-6</div>
            </Col>
            <Col span={6}>
                <div class="col-content">col-6</div>
            </Col>
            <Col span={6}>
                <div class="col-content">col-6</div>
            </Col>
            <Col span={6}>
                <div class="col-content">col-6</div>
            </Col>
        </Row>
    </div>
);

export const GridGutter = () => (
    <div class="grid grid-gutter">
        <p>horizontal</p>
        <hr/>
        <Row gutter={16}>
            <Col span={6}>
                <div class="col-content">col-6</div>
            </Col>
            <Col span={6}>
                <div class="col-content">col-6</div>
            </Col>
            <Col span={6}>
                <div class="col-content">col-6</div>
            </Col>
            <Col span={6}>
                <div class="col-content">col-6</div>
            </Col>
        </Row>
        <br/>
        <p>vertical</p>
        <hr/>
        <Row gutter={[16, 24]}>
            <Col span={6}>
                <div class="col-content">col-6</div>
            </Col>
            <Col span={6}>
                <div class="col-content">col-6</div>
            </Col>
            <Col span={6}>
                <div class="col-content">col-6</div>
            </Col>
            <Col span={6}>
                <div class="col-content">col-6</div>
            </Col>
            <Col span={6}>
                <div class="col-content">col-6</div>
            </Col>
            <Col span={6}>
                <div class="col-content">col-6</div>
            </Col>
            <Col span={6}>
                <div class="col-content">col-6</div>
            </Col>
            <Col span={6}>
                <div class="col-content">col-6</div>
            </Col>
        </Row>
    </div>
)

export const GridOffset = () => (
    <div class="grid">
        <Row>
            <Col span={8}>
                <div class="col-content">col-8</div>
            </Col>
            <Col span={8} offset={8}>
                <div class="col-content">col-8</div>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col span={6} offset={6}>
                <div class="col-content">col-6</div>
            </Col>
            <Col span={6} offset={6}>
                <div class="col-content">col-6</div>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col span={12} offset={6}>
                <div class="col-content">col-12</div>
            </Col>
        </Row>
    </div>
);

export const GridFlex = () => <div class="grid grid-flex">
    <p>sub-element align left</p>
    <Row type="flex" justify="start">
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
    </Row>

    <p>sub-element align center</p>
    <Row type="flex" justify="center">
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
    </Row>

    <p>sub-element align right</p>
    <Row type="flex" justify="end">
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
    </Row>

    <p>sub-element monospaced arrangement</p>
    <Row type="flex" justify="space-between">
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
    </Row>

    <p>sub-element align full</p>
    <Row type="flex" justify="space-around">
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
    </Row>

    <p>Align Top</p>
    <Row type="flex" justify="center" align="top">
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
    </Row>

    <p>Align Center</p>
    <Row type="flex" justify="space-around" align="middle">
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
    </Row>

    <p>Align Bottom</p>
    <Row type="flex" justify="space-between" align="bottom">
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={4}>
            <div class="col-content">col-4</div>
        </Col>
    </Row>

    <p>Order</p>
    <Row type="flex">
        <Col span={6} order={4}>
            <div class="col-content">col-4</div>
        </Col>
        <Col span={6} order={3}>
            <div class="col-content">col-3</div>
        </Col>
        <Col span={6} order={2}>
            <div class="col-content">col-2</div>
        </Col>
        <Col span={6} order={1}>
            <div class="col-content">col-1</div>
        </Col>
    </Row>

</div>

export const GridResponsive = () => (
    <div class="grid">
        <Row gutter={{xs: 16, sm: 16, md: 16, lg: 24, xl: 24, xxl: 24}}>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <div class="col-content">Col</div>
            </Col>
            <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                <div class="col-content">Col</div>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <div class="col-content">Col</div>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col xs={{span: 5, offset: 1}} lg={{span: 6, offset: 2}}>
                <div class="col-content">Col</div>
            </Col>
            <Col xs={{span: 11, offset: 1}} lg={{span: 6, offset: 2}}>
                <div class="col-content">Col</div>
            </Col>
            <Col xs={{span: 5, offset: 1}} lg={{span: 6, offset: 2}}>
                <div class="col-content">Col</div>
            </Col>
        </Row>
    </div>
);



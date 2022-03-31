import React from 'react';
import Icon, {
	LineChartOutlined,
	ArrowRightOutlined,
	VerticalAlignBottomOutlined,
	DashboardOutlined,
	BranchesOutlined,
	RocketOutlined,
	VerticalAlignMiddleOutlined,
	ColumnWidthOutlined,
	RiseOutlined,
} from '@ant-design/icons';

const IconComponent = (props) => {
	const searchIcon = (iconName) => {
		let founIcon;
		switch (iconName) {
			case 'LineChartOutlined':
				founIcon = LineChartOutlined;
				break;
			case 'ArrowRightOutlined':
				founIcon = ArrowRightOutlined;
				break;
			case 'VerticalAlignBottomOutlined':
				founIcon = VerticalAlignBottomOutlined;
				break;
			case 'DashboardOutlined':
				founIcon = DashboardOutlined;
				break;
			case 'BranchesOutlined':
				founIcon = BranchesOutlined;
				break;
			case 'RocketOutlined':
				founIcon = RocketOutlined;
				break;
			case 'VerticalAlignMiddleOutlined':
				founIcon = VerticalAlignMiddleOutlined;
				break;
			case 'ColumnWidthOutlined':
				founIcon = ColumnWidthOutlined;
				break;
			case 'RiseOutlined':
				founIcon = RiseOutlined;
				break;
			default:
				founIcon = LineChartOutlined;
		}
		return founIcon;
	};
	return <Icon component={searchIcon(props.component)} />;
};

export default IconComponent;

import React, { Component } from 'react';

/** The input content component */
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue || '', // تعيين القيمة الافتراضية
    };
  }

  // معالجة التغيير في المدخل
  onInputChange = (e) => {
    let value = e.target.value; // الحصول على القيمة المدخلة
    this.setState({ value }, () => {
      // استدعاء دالة onChange من المكون الأب مع القيمة المحدثة
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    });
  };

  render() {
    return (
      <input
        type="text"
        placeholder={this.props.placeholder}
        value={this.state.value} // تعيين القيمة من الحالة
        onChange={this.onInputChange} // استدعاء onInputChange مباشرة
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out shadow-sm placeholder-gray-400"
      />
    );
  }
}

export default Input;

export const formElements = [
  {
    type: 1,
    configuration: {
      placeholder: '请输入用户名',
      label: '用户名',
      field: 'username',
      maxlength: 10,
      clearable: true
    },
  },
  {
    type: 2,
    configuration: {
      placeholder: '请输入生日',
      label: '生日',
      format: 'YYYY/MM/DD',
      valueFormat: 'YYYY/MM/DD',
    },
  }
]
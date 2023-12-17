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
    type: 1,
    configuration: {
      placeholder: '请输入昵称',
      label: '昵称',
      field: 'nickname',
      maxlength: 10,
      clearable: true
    },
  },
  {
    type: 1,
    configuration: {
      placeholder: '请输入住址',
      label: '住址',
      field: 'address',
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
  },
  {
    type: 2,
    configuration: {
      placeholder: '请输入开始时间',
      label: '开始时间',
      format: 'YYYY/MM/DD',
      valueFormat: 'YYYY/MM/DD',
    },
  },
  {
    type: 2,
    configuration: {
      placeholder: '请输入结束时间',
      label: '结束时间',
      format: 'YYYY/MM/DD',
      valueFormat: 'YYYY/MM/DD',
    },
  },
]
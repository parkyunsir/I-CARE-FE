export const options = [
    { value: '최신순', label: '최신순' },
    { value: '오래된순', label: '오래된순' }
  ];
  
export const customStyles = {
    option: (provided, state) => ({ // 오래된순, 최신순
      ...provided,
      backgroundColor: state.isFocused ? '#6271f5' : null,
      color: state.isFocused ? '#fff' : '#000',
      paddingLeft: 10,
      borderRadius: '2px',
      textAlign: 'center',
      fontSize: '12px',
    }),
    control: (provided) => ({ // 보이는 부분 (default=최신순)
      ...provided,
      borderRadius: '10px',
      textAlign: 'center',
      fontSize: '13px',
    }),
  };
import { Dropdown } from 'react-native-element-dropdown';
import { StyleSheet } from 'react-native';

const TRAINING_FILTER_OPTIONS = [
  {
    value: 'all',
    label: '전체 훈련일지',
  },
  {
    value: 'personal',
    label: '개인 훈련',
  },
  {
    value: 'tactical',
    label: '전술 훈련',
  },
  {
    value: 'pass',
    label: '패스',
  },
  {
    value: 'passDrill',
    label: '패스 드릴',
  }
]

type Props = {
  trainingType: string;
  onChange: (e) => void;
}

export default function DropDownComponent({ trainingType, onChange }: Props) {
  return (
    <Dropdown
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      maxHeight={200}
      value={trainingType}
      data={TRAINING_FILTER_OPTIONS}
      valueField="value"
      labelField="label"
      placeholder={TRAINING_FILTER_OPTIONS.find(option => option.value === trainingType)?.label}
      onChange={(e) => onChange(e.value)}
    />
  );
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    width: 150,
    backgroundColor: '#ffffff',
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  }
});

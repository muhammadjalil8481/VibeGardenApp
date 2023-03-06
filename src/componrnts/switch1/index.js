import React, {useState} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';

const Switch1 = props => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <ToggleSwitch
      isOn={isEnabled}
      onColor="#1C5C2E"
      offColor="#75997E"
      thumbOffStyle={{width: 17, height: 17, marginLeft: 6}}
      thumbOnStyle={{width: 17, height: 17}}
      trackOnStyle={{
        height: 27,
        marginRight: props.marginRight,
        marginTop: props.marginTop,
      }}
      trackOffStyle={{
        height: 27,
        marginRight: props.marginRight,
        marginTop: props.marginTop,
      }}
      size="medium"
      onToggle={() => setIsEnabled(!isEnabled)}
    />
  );
};

export {Switch1};

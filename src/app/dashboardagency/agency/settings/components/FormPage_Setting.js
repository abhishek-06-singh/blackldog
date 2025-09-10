import { ConfigProvider } from 'antd';
import PersonalInformationPage from './PersonalInformationPage';
import TeamAccessSettings from './TeamAccessSettings';
import NotificationPreferences from './NotificationPreferences';
import ChangePassword from './ChangePassword';
import SettingsPanel from './SettingsPanel';

export default function FormPage_Setting() {
    return (
        <div className="w-full h-full p-4 md:p-6 space-y-6">
                 <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#EEB887', // custom theme color
          borderRadius: 12,
        },
        components: {
          Steps: {
            colorPrimary: '#EEB887',
            colorText: '#000',
            colorTextActive: '#EEB887',
          },
        },
      }}
    >
        <PersonalInformationPage/>
        <TeamAccessSettings/>
        <NotificationPreferences/>
        <ChangePassword/>
        <SettingsPanel/>
    </ConfigProvider>
        </div>
    )
}
import { Container } from './Profile.styles';
import { Subheading } from './Profile.styles';
import { SectionTitle } from '../../atoms/SectionTitle/SectionTitle';
import { PersonalInfoForm } from '../../organisms/ProfileForms/PersonalInfoForm';
import { DailyGoalForm } from '../../organisms/ProfileForms/DailyGoalForm';

export const Profile = () => {
  return (
    <Container>
      <SectionTitle>Profile</SectionTitle>
      <Subheading>Generate daily nutrients goal</Subheading>
      <PersonalInfoForm />
      <Subheading>Or enter it by yourself</Subheading>
      <DailyGoalForm />
    </Container>
  );
};

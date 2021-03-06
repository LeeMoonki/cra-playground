# SignupPage
회원가입을 구현하기 위해 여러가지 기능이 복합적으로 들어간 페이지 입니다. 이 페이지에서 다뤄지는 구성요소들을 어떻게 테스트할 수 있는지 살펴봅니다. 다음 내용에 대해 테스트를 했고 관련해서 고민한 내용까지 기록합니다.

## 테스트 & 구현 내용
- 아이디를 확인하는 테스트는 두 가지 케이스로 나눌 수 있습니다. a. 적절한 아이디인지 확인하는 로직과 b. 중복확인을 활설화 할지 확인하는 로직. 여기에선 적절한 아이디를 판단하는 로직이 별도로 없기 때문에 테스트는 없지만 만약 있다면 UI를 통해 테스트하는 것이 아니라 적절한지 판단하는 함수를 테스트 합니다. 그리고 중복확인 버튼의 경우 활성화, 비활성화를 UI를 통해 판단하기 때문에 UI에 대한 테스트가 들어가게 됩니다. 즉, UI를 통해 테스트를 진행할지 아니면 함수 및 데이터를 통해 테스트를 진행할지 방법을 명확하게 정하는게 중요합니다. 그 기준은 대상의 목적을 잘 살펴봐야 합니다.
- 비밀번호를 테스트하는 경우 적절한 비밀번호를 확인하므로 UI가 아닌 함수와 데이터 등을 테스트 대상에 포함시킵니다.
- 비밀번호를 테스트할 때 적절한 에러 메세지를 노출하는지 여부는 UI를 통해 테스트 합니다.


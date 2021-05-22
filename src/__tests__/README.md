# Test Guide
## tests 관련 참고 문서

- [Testing Library - Guiding Principles](https://testing-library.com/docs/guiding-principles/)
- [Testing Library - Query Priority](https://testing-library.com/docs/queries/about#priority)
- [jest-dom](https://github.com/testing-library/jest-dom)
- [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

- [ARIA in HTML(role table)](https://www.w3.org/TR/html-aria/#docconformance)

## Guide
- 테스트 메세지는 가급적 `수동형`이 아닌 `능동형` 표현을 쓰도록 합니다.
  - 예를들어 `-됩니다`보다 `-합니다`를 사용
- 대상이 동일한 테스트가 둘 이상이면 그룹핑(`describe`)을 해주고 그룹핑된 테스트가 동일한 속성으로 묶일 수 있다면 다시 그룹핑 해줍니다.
  - 그룹핑(`describe`)이 되면 내부 테스트 케이스는 `it`을 사용합니다.
  - 만약 그룹핑되지 않았다면 `test`를 사용합니다.
- queryBy, getBy
  - 일반적인 테스트 환경에선 `queryBy` 대신 `getBy`를 사용합니다. `getBy`를 사용하면 대상을 못 찾았을 때 못 찾은 테스트 지점에서 에러가 발생해 문제를 바로 확인할 수 있습니다. 반면 `queryBy`를 사용하면 반환값이 `null`이기 때문에 만약 `null`이 테스트 통과 조건에 포함된다면 대상을 찾지 못해도 테스트를 통과하는 문제가 발생할 수 있습니다.
  - 만약 대상이 있는지 확인하는 테스트를 작성하고자하면 `queryBy`를 사용합니다.
- UI, JS 테스트
  - UI를 테스트할 땐 UI의 동작에 대해 테스트합니다. 즉, 데이터 또는 상태 등을 추적하며 테스트하지 않습니다. 이벤트를 호출하고 UI에 적절한 반영이 되었는지 확인합니다.
  - 데이터 또는 상태를 테스트할 땐 흐름을 테스트하는 것이 아니라 데이터를 다루는 부분을 단위화(모듈화)하고 각 단위를 테스트합니다. 그리고 데이터 또는 상태의 흐름은 각 테스트 케이스를 통해 확인합니다.
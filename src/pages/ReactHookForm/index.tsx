import { css } from '@emotion/react';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const Gender = {
  female: 'female',
  male: 'male',
  other: 'otehr',
} as const;

type Gender = typeof Gender[keyof typeof Gender];

type Form = {
  gender: Gender;
  name: string;
  description: string;
};

const ReactHookFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();
  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>React Hook Form</h1>
      <form css={styleForm} onSubmit={handleSubmit(onSubmit)}>
        <label>
          이름
          <input {...register('name')} />
        </label>
        <label htmlFor="gender">성별</label>
        <select id="gender" {...register('gender')}>
          <option value={Gender.female}>여자</option>
          <option value={Gender.male}>남자</option>
          <option value={Gender.other}>기타</option>
        </select>
        <label>
          소개
          <input {...register('description', { required: true })} />
        </label>
        {errors.description && <span>소개를 작성해야 합니다.</span>}
        <button type="submit">제출</button>
      </form>
    </>
  );
};

const styleForm = css({
  display: 'flex',
  flexDirection: 'column',
});

export default ReactHookFormPage;

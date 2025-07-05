<template>
  <div class="form">
    <div class="container">
      <h2 class="form__title">Обратная связь</h2>
      <p class="form__description">
        Оставьте заявку и мы свяжемся с вами в ближайшее время
      </p>
      <div class="form__wrapper">
        <form class="form__form" @submit.prevent="onSubmit">
          <div v-if="!isSuccess" class="form__errors">
            <p v-if="errors.name" class="form__error">{{ errors.name }}</p>
            <p v-if="errors.phone" class="form__error">{{ errors.phone }}</p>
            <p v-if="errors.email" class="form__error">{{ errors.email }}</p>
          </div>
          <PrimeInputText v-model="name" placeholder="Имя" />
          <PrimeInputText v-model="phone" placeholder="Телефон" />
          <PrimeInputText v-model="email" placeholder="Email" />
          <PrimeButton type="submit" label="Отправить" />
          <p v-if="isSuccess" class="form__success">
            Спасибо за заявку! Мы свяжемся с вами в ближайшее время
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { name, phone, email, handleSubmit, errors, isSuccess } = useSendMailer()

const onSubmit = async () => {
  await handleSubmit({
    name: name.value,
    phone: phone.value,
    email: email.value,
  })
}
</script>

<style scoped lang="scss">
.form {
  padding-bottom: 50px;
  &__title {
    color: #000;
    text-align: center;
    font-family: 'Roboto';
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -1.2px;
    @media screen and (max-width: 875px) {
      font-size: 22px;
      letter-spacing: -0.96px;
    }
  }
  &__description {
    margin-bottom: 17px;
    color: #000000;
    text-align: center;
    font-family: 'Roboto';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.48px;
    @media screen and (max-width: 875px) {
      font-size: 16px;
      letter-spacing: -0.36px;
    }
  }
  &__form {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &:deep(.p-inputtext) {
    width: 100%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #3f5d77;
    background: #ffffff;
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.42px;
    padding: 10px 10px;
    @media screen and (max-width: 875px) {
      font-size: 14px;
      height: 35px;
      padding: 10px 10px;
    }
  }
  &:deep(.p-button) {
    margin-bottom: 20px;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 400;
    @media screen and (max-width: 875px) {
      font-size: 14px;
      height: 40px;
    }
  }
  &__errors {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-left: 7px solid #3f5d77;
    padding-left: 10px;
    margin-bottom: 10px;
    @media screen and (max-width: 875px) {
      padding-left: 5px;
      border-left: 5px solid #3f5d77;
    }
  }
  &__error {
    color: #3f5d77;
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.42px;
    @media screen and (max-width: 875px) {
      font-size: 11px;
      letter-spacing: normal;
    }
  }
  &__success {
    text-align: center;
    color: #01640c;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.42px;
  }
}
</style>

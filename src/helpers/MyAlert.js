import { createApp, h, ref } from 'vue';
import MyAlert from '@/helpers/MyAlert.vue';

const createAlertInstance = (message = '', options) => {
  const {
    okCallback = () => {},
    cancelCallback = () => {},
    okButtonText = 'Continuar',
    cancelButtonText = 'Cancelar',
    type = 'default'
  } = options || {};
  
  const visible = ref(false);

  const closeAlert = () => {
    visible.value = false;
    setTimeout(() => {
      alertInstance.unmount();
      root.remove();
    }, 500);
  };

  const alertInstance = createApp({
    render() {
      return h(MyAlert, {
        message,
        ok: () => {
          okCallback && okCallback();
          closeAlert();
        },
        cancel: () => {
          cancelCallback && cancelCallback();
          closeAlert();
        },
        okButtonText,
        cancelButtonText,
        visible,
        type,
      });
    },
  });

  const root = document.createElement('div');
  document.body.appendChild(root);
  alertInstance.mount(root);
};

const alert = {
  confirm(message, options) {
    createAlertInstance(message, {...options, type: 'confirm'});
  },
  show(message, options) {
    createAlertInstance(message, options);
  },
};

export default alert;

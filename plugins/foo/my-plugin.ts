export default defineNuxtPlugin((NuxtApp) => {
  console.log("my-plugin", NuxtApp);
  
  return {
    provide: {
      hello: (msg: string) => `hello ${msg}`,
      consoleIt: (data: any) => console.log('consoleIt:', data),

    }
  }
})
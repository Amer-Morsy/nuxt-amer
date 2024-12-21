export default defineNuxtRouteMiddleware((to, from) => {
  console.log("01.Global Middleware", {
    to,
    from
  });

}) 
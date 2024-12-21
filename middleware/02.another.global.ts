export default defineNuxtRouteMiddleware((to, from) => {
  console.log("02.Another Middleware", {
    to,
    from
  });

}) 
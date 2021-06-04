import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async (ctx) => {
    const body = await ctx.request.body({ type: 'form-data'});
    const form = await body.value.read();
    const file = Deno.statSync(form.files[0].filename);
    ctx.response.body = `file size is ${file.size}.`;
});

await app.listen({ port: 8123 });

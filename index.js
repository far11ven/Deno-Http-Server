import { serve } from "https://deno.land/std@v0.30.0/http/server.ts";

const s = serve({ port: 5000 });

console.log("Listening on http://localhost:5000/");

for await (const req of s) {
  req.respond({ body: "Hello World!!" });
}

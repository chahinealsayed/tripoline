/**
 * carousel.vue Startup File
 *
 * @project tripoline
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Thursday, August 31, 2023 at 02:43 PM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/carousel.vue"
import bootstrap from "../bootstrap/carousel"

const app = createApp("carousel", AppComponent)
bootstrap(app)
app.mount()

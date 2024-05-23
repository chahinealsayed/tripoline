/**
 * sidemenu.vue Startup File
 *
 * @project tripoline
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Thursday, August 24, 2023 at 01:02 PM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/sidemenu.vue"
import bootstrap from "../bootstrap/sidemenu"

const app = createApp("sidemenu", AppComponent)
bootstrap(app)
app.mount()

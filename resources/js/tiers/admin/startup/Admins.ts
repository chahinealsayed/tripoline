/**
 * Admins.vue Startup File
 *
 * @project tripoline
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Thursday, August 17, 2023 at 11:34 AM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/Admins.vue"
import bootstrap from "../bootstrap/Admins"

const app = createApp("admins", AppComponent)
bootstrap(app)
app.mount()
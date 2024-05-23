/**
 * icon.vue Startup File
 *
 * @project tripoline
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Thursday, September 14, 2023 at 10:53 AM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/icon.vue"
import bootstrap from "../bootstrap/icon"

const app = createApp("icon", AppComponent)
bootstrap(app)
app.mount()

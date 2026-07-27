import path from "path";
import load from "../../index.js";
import fs from "fs";

const configPath = path.join(process.cwd(), "Config", "Schemas", "doctors.json");

const doctorsJson = fs.readFileSync(configPath);

load({
    toPath: path.join(process.cwd(), "doctors"),
    sacredWisdom: JSON.parse(doctorsJson),
    inAction: "Crud"
});
import React, { useState } from "react";
import pic from "@/assets/react.svg";
import { InputText } from "primereact/inputtext";

import { Button } from "primereact/button";

type Props = {};

export default function LoginPage({}: Props) {
  const [id, sid] = useState<string>();
  const [pw, spw] = useState<string>();
  return (
    <div>
      <div className="grid">
        <div className="col-12">
          <h1>Login Page แบบโง่ๆ</h1>
        </div>
        <div className="grid col-12">
          <div className="col-2 floatlabel">
            <label>Username</label>
            <InputText
              value={id}
              onChange={(e) => {
                sid(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="grid col-12">
          <div className="col-2 floatlabel">
            <label>Password</label>
            <InputText
              type={"password"}
              value={pw}
              onChange={(e) => {
                spw(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="grid col-12">
          <Button
            label="ล็อคอินตรงนี้ครับพรี่"
            className="p-button-raised p-button-danger"
          />
        </div>
      </div>
    </div>
  );
}

package com.manhdat.OrderManager.Result;

public class Results {
    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public static Results create(String message) {
        Results result = new Results();
        result.setMessage(message);
        return result;
    }
}

// Use some filter method to filter out your array and pass it dataSource prop and call the component as follows
// filter the array on each text input change

<View >
    <TextInput
        ref={firstInputRef}
        autoFocus={true}
        selectTextOnFocus={true}
        style={styles.textInput} // give some text props
        value={someState}
        onChangeText={setSomeState}
        placeholder="Search"
        keyboardShouldPersistTaps="always"
        blurOnSubmit={false}
    />
    <View
        style={styles.customDropDownContainerStyles} // provide zindex in these styles
    >
        {
            hideList == true ?
                null
                :
                <CustomSearchableDropdown
                    dataSource={filteredArray}
                    handlePress={(selectedValue) => {
                        setValue(selectedValue) // callback will have a selected value from your passed array
                    }}
                />
        }
    </View>
</View>
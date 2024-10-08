import { memo, useState } from "react";
import PropsTypes from "prop-types";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
const FilterDialog = memo(({ open, onMaskClick, onFilter }) => {
    // const [dialogOpen, setDialogOpen] = useState(open);
    const [filterFormData, setFilterFormData] = useState({
        department: "",
        gender: "",
        healthInsurance: "",
    });
    return (
        <div>
            <Dialog
                open={open}
                onClose={() => onMaskClick(false)}
                PaperProps={{
                    component: "form",
                    onSubmit: (e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        console.log("formJson", formJson);
                        onFilter(formJson);
                        onMaskClick(false);
                    },
                }}
                //fullWidth
            >
                <DialogTitle>Lọc danh sách bác sĩ</DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            minHeight: 80,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: "8px",
                        }}
                    >
                        <FormControl
                            sx={{
                                maxWidth: "calc(100% - 48px)",
                                width: 240,
                            }}
                        >
                            <InputLabel id="doctor-department-label-dialog">
                                Khoa Trực Thuộc
                            </InputLabel>
                            <Select
                                name="department"
                                labelId="doctor-department-label-dialog"
                                id="doctor-department"
                                //defaultValue={data?.department}
                                value={filterFormData.department}
                                onChange={(e) => {
                                    setFilterFormData({
                                        ...filterFormData,
                                        department: e.target.value,
                                    });
                                }}
                                label="Khoa Trực Thuộc"
                                size="small"
                            >
                                <MenuItem value="Khoa ngoại">Khoa ngoại</MenuItem>
                                <MenuItem value="Khoa nội">Khoa nội</MenuItem>
                                <MenuItem value="Khoa sản">Khoa sản</MenuItem>
                                <MenuItem value="Khoa nhi">Khoa nhi</MenuItem>
                                <MenuItem value="Khoa mắt">Khoa mắt</MenuItem>
                            </Select>
                        </FormControl>
                        <div
                            className="clear-filter-dialog"
                            onClick={() =>
                                setFilterFormData({
                                    ...filterFormData,
                                    department: "",
                                })
                            }
                        >
                            Bỏ chọn
                        </div>
                    </Box>
                    <Box
                        sx={{
                            minHeight: 80,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: "8px",
                        }}
                    >
                        <FormControl
                            sx={{
                                maxWidth: "calc(100% - 48px)",
                                width: 240,
                            }}
                        >
                            <InputLabel id="doctor-gender-label-dialog">
                                Giới tính
                            </InputLabel>
                            <Select
                                name="gender"
                                labelId="doctor-gender-label-dialog"
                                id="doctor-gender"
                                defaultValue={""}
                                value={filterFormData.gender}
                                onChange={(e) => {
                                    setFilterFormData({
                                        ...filterFormData,
                                        gender: e.target.value,
                                    });
                                }}
                                label="Giới tính"
                                size="small"
                            >
                                <MenuItem value="Nam">Nam</MenuItem>
                                <MenuItem value="Nữ">Nữ</MenuItem>
                            </Select>
                        </FormControl>
                        <div
                            className="clear-filter-dialog"
                            onClick={() =>
                                setFilterFormData({
                                    ...filterFormData,
                                    gender: "",
                                })
                            }
                        >
                            Bỏ chọn
                        </div>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() =>
                            setFilterFormData({
                                department: "",
                                gender: "",
                                healthInsurance: "",
                            })
                        }
                        variant="outlined"
                        color="error"
                    >
                        Bỏ chọn tất cả
                    </Button>
                    <Button
                        onClick={() => onMaskClick(false)}
                        variant="outlined"
                        color="secondary"
                    >Đóng</Button>
                    <Button
                        type="submit"
                        variant="outlined"
                    >Xác nhận</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});

// Prop types validation
// Ref: https://www.npmjs.com/package/prop-types
FilterDialog.propTypes = {
    open: PropsTypes.bool,
    onMaskClick: PropsTypes.func,
    onFilter: PropsTypes.func,
};

// Display name for fast refresh using memo
FilterDialog.displayName = "FilterDialog";

export default FilterDialog;